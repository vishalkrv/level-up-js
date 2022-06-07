//Flyweight Pattern

class CodeFile {
    constructor(codefileName){
        this.codefileName = codefileName
    }
}

 
class Formatter {
    format(codefile){}
}

 
class PythonFormatter extends Formatter {
 
    constructor(){
        super()
        console.log("Python Formatter instance created")
    }
     
   
    format(codefileName) {
        console.log(`"Formatting the Python ${codefileName} file you uploaded.`)
    }
 
}
const codefile = new CodeFile("helloworld.py")
const pythonFormatter = new PythonFormatter()
pythonFormatter.format(codefile.codefileName)