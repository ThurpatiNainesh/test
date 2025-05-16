const express = require('express');
const {
  getListByType,
  getListOfInstitute,
  getClassCategory,
  getClassCategoryid,
  getTypeOfInstitute,
  getDegree,
  getCompetitiveExams,
  getSubjectsBasedOnStandard,
  UserRegister
} = require('../controllers/user');

const router = express.Router();

router.get("/getListByType", getListByType)
router.get("/getListOfInstitute", getListOfInstitute)
router.get("/getClassCategory", getClassCategory)
router.get("/getClassCategoryid", getClassCategoryid)
router.get("/getTypeOfInstitute", getTypeOfInstitute)
router.get("/getDegree", getDegree)
router.get("/getCompetitiveExams", getCompetitiveExams)
router.get("/getSubjectsBasedOnStandard", getSubjectsBasedOnStandard)
router.post("/UserRegister", UserRegister)



module.exports = router;