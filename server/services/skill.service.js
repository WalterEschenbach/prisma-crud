const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


async function createSkill(obj) {  
        const {title, keyword, description} = obj;
        let newSkill = {
            data: {
              title,
              keyword,
              description
            }
          };
        const skill = await prisma.skill.create(newSkill)
        console.log(`Created new skill: ${skill.title} (${skill.keyword})`)
  }

  async function deleteSkill(id) {  
    const deadSkill = {
        where : {
            id
        }
    }
    const skill = await prisma.skill.delete(deadSkill)
    console.log(`Deleted skill: ${skill.title} (${skill.keyword})`)
}
  
  module.exports = {
    createSkill,
    deleteSkill
  };