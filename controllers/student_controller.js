import Student from "../models/student_model.js"

export const readStudents=async(req,res)=>{
    try {
        const students=await Student.find()
        res.json(students)
    } catch (error) {
        return res.json({message:error.message})
    }
}

export const readStudent=async(req,res)=>{
    try {
        const student=await Student.findById(req.params.id)
        res.json(student)
    } catch (error) {
        return res.json({message:error.message})
    }
}

export const createStudent=async(req,res)=>{
    const newStudent=new Student({
        id:req.body.id,
        name:req.body.name,
        place:req.body.place
    })
    try {
        await newStudent.save()
        res.json(newStudent)
    } catch (error) {
        return res.json({message:error.message})
    }
}

export const updateStudent=async(req,res)=>{
    try {
        const updatedStudent=await Student.findByIdAndUpdate(
            {
                _id:req.params.id
            },
            {
                id:req.body.id,
                name:req.body.name,
                place:req.body.place
            },
            {
                new:true
            }
        )
        res.json(updatedStudent)
    } catch (error) {
        return res.json({message:error.message})
    }
}

export const deleteStudent=async(req,res)=>{
    try {
        await Student.deleteOne({_id:req.params.id})
        res.json({message:"Deleted successfully"})
    } catch (error) {
        return res.json({message:error.message})
    }
}