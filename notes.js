const fs= require('fs')
const getNotes=function getNotes(){
    return "success"
}

const addnotes = (title, body)=>{
    const notes= loadNotes();
    const duplicatenotes= notes.filter((note)=> note.Title === title )
    
    if(duplicatenotes.length === 0){
        notes.push({
            Title: title,
            Body: body
        })
        savenotes(notes);
        console.log("new note added")
    }else{
        console.log("note has already added")
    }
    
}

const readNotes = (title)=>{
    var notes = loadNotes(title)
      
}

const savenotes = (notes)=>{

    const dataJson= JSON.stringify(notes);
    fs.writeFileSync("notes.json",dataJson);

}
const loadNotes =() =>{
    try{
    const databuffer= fs.readFileSync("notes.json");
    const dataJson= databuffer.toString();
    return JSON.parse(dataJson);
    }catch(e){
        return [];
    }

}

const removeNotes =(title)=>{
    const notes= loadNotes();
    const duplicatenotes= notes.filter((note)=> note.Title !== title)
    if(notes.length>duplicatenotes.length){
        console.log("note removed")
        savenotes(duplicatenotes)
    }else{
        console.log("no node found")
    }
}



module.exports={
    addnotes: addnotes,
    getNotes: getNotes,
    removeNotes: removeNotes,
    readNotes: readNotes
}