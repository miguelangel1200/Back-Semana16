import prisma from "../../db"
import { success, failed } from "../../responses"

export const findAll = async (req, res) => {
    try {
        const challengues = await prisma.challengue.findMany()
        return success({ res,data: challengues})
    } catch (error) {
        return failed({res, error})
    }
}

export const findOne = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const challengue = await prisma.challengue.findUnique({
            where: { id },
        })
        return success({ res, data: challengue})
    } catch (error) {
        return failed ({ res, error })
    }
}

export const create = async (req, res) => {
    try {
        const challengue = await prisma.challengue.create({
            data: req.body,
        })
        return success({ res, data: challengue, status: 201 })
    } catch (error) {
        return failed({ res, error })
    }
}

export const update = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const challengue = await prisma.challengue.update({
            where: { id },
            data: req.body,
        })
        return success({ res, data: challengue })
    } catch (error) {
        return failed({ res, error })
    }
}

export const remove = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const challengue = await prisma.challengue.delete({
            where: { id },
        })
        return success({ res, data: challengue })
    } catch (error) {
        return failed({ res, error })
    }
}