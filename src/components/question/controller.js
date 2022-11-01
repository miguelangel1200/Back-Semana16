import prisma from "../../db"
import { success, failed } from "../../responses"

export const findAll = async (req, res) => {
    try {
        const questions = await prisma.question.findMany()
        return success({ res,data: questions})
    } catch (error) {
        return failed({res, error})
    }
}

export const findOne = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const question = await prisma.question.findUnique({
            where: { id },
        })
        return success({ res, data: question})
    } catch (error) {
        return failed ({ res, error })
    }
}

export const create = async (req, res) => {
    try {
        const question = await prisma.question.create({
            data: req.body,
        })
        return success({ res, data: question, status: 201 })
    } catch (error) {
        return failed({ res, error })
    }
}

export const update = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const question = await prisma.question.update({
            where: { id },
            data: req.body,
        })
        return success({ res, data: question })
    } catch (error) {
        return failed({ res, error })
    }
}

export const remove = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const question = await prisma.question.delete({
            where: { id },
        })
        return success({ res, data: question })
    } catch (error) {
        return failed({ res, error })
    }
}