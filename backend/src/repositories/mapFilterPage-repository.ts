import { occurrence, PrismaClient } from '@prisma/client';
import { date } from 'joi';

const prisma = new PrismaClient();

//  consulta o banco de dados e retorna todas as ocorrências com date_violence nos últimos 5 anos

async function getViolenceData() {
    const timeWindow = 5 // years   

    const currentDate = new Date();
    const dateFilter =  new Date(currentDate);
    dateFilter.setFullYear(currentDate.getFullYear() - timeWindow)
    const violencedata = await prisma.occurrence.findMany({
        where: {
            date_violence:{
                gt: dateFilter
            },
        },
        select: {       
            id_occurrence: true,                                                            
            latitude: true,                 
            longitude: true,
            violence_type: true
        }
    });
    return violencedata;
 
}

export const MapFilterRepository = {
    getViolenceData
}