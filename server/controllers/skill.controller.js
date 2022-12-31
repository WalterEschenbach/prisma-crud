const express = require('express');
const router = express.Router();
const skillService = require('../services/skill.service');

const getSkills = (req, res) => {
  res.send('Skills!');
};

const postNewSkill = (req, res)=>{
  try {
    skillService.createSkill(req.body);
  } catch (error) {
    console.log('error: ', error)
  }

  const response = {
    status: 200,
    action: "create"
  }

  res.status(200).send(response);
};

const deleteSkill = (req, res)=>{
  try {
    skillService.deleteSkill(req.body.id);
  } catch (error) {
    console.log('error: ', error)
  }

  const response = {
    status: 200,
    action: "delete", 
    id: req.body.id ? req.body.id : 0
  }

  res.status(200).send(response);
};


module.exports = {
  getSkills,
  postNewSkill,
  deleteSkill
};
