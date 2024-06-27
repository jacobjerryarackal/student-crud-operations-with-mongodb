import Student from "../model/studentModel.js"

export const fetch = async(req,res) => {
    try {
        const students = await Student.find();
        if(!students){
            return res.status(404).json({meassage : "Student Not Found"})
        }
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
}

export const create = async(req,res) => {
    try {
        const studentData = new Student(req.body);
        const {email} = studentData;

        const studentExist = await Student.findOne({email})
        if(studentExist){
            res.status(400).json({message : "Student already exists !!"})
        }
        const savedStudent = await studentData.save();
        res.status(200).json(savedStudent);
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
    
}

export const update = async(req,res) => {
    try {
        const id = req.params.id
        const studentExist = await Student.findOne({_id : id})
        if(!studentExist){
            res.status(400).json({message : "Student not found !!"})
        }
        const updateStudent = await Student.findByIdAndUpdate(id, req.body, {new:true});
        res.status(201).json(updateStudent)
    } catch (error) {
        res.status(500).json({message : "Internal Server Problem"})
    }
}   

export const deleteStudent = async(req,res) => {
    try {
        const id = req.params.id;
        const studentExist = await Student.findOne({_id : id})
        if(!studentExist){
            res.status(404).json({message : "Student not found"})
        }
        await Student.findByIdAndDelete(id);
        res.status(201).json({message : ""})
    } catch (error) {
        res.status(500).json({message : "Internal Server Isssue"})
    }
}