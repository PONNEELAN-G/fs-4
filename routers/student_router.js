import express from 'express'
import { createStudent, deleteStudent, readStudent, readStudents, updateStudent } from '../controllers/student_controller.js'

const router=express.Router()

router.get('/',readStudents)

router.get('/:id',readStudent)

router.post('/',createStudent)

router.put('/:id',updateStudent)

router.delete('/:id',deleteStudent)

export default router