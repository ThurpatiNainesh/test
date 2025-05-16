const User = require('../models/user');
const ClassCategory = require('../models/classCategory');
const Class = require('../models/class');
const competitiveExam = require("../models/competitiveExam");
const Degree = require('../models/degree');
const Institution = require('../models/instituteType')
const Standard = require('../models/standard');
const constant = require("../common/common")
const jwt = require("jsonwebtoken");

exports.getListByType = async (req, res, next) => {
  const { type } = req.query;
  try {
    if (constant[type]) {
      return res.status(200).json({
        success: true,
        count: constant[type],
      });
    }
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
exports.getListOfInstitute = async (req, res, next) => {

  try {
    let Institutions = await Institution.find({})

    return res.status(200).json({
      success: true,
      Institutions,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
exports.getClassCategory = async (req, res, next) => {
  
  try {
    let classCategorys = await ClassCategory.find({})

    return res.status(200).json({
      success: true,
      classCategorys,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
exports.getClassCategoryid = async (req, res, next) => {
  const{classCategoryId}=req.query
  try {
    let classes = await Class.find({classCategoryId:classCategoryId})
    return res.status(200).json({
      success: true,
      classes,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.getTypeOfInstitute = async (req, res, next) => {
  const { type } = req.query;
  try {

    return res.status(200).json({
      success: true,
      count: constant[type],
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.getDegree = async (req, res, next) => {

  try {
    let degrees = await Degree.find({})
      return res.status(200).json({
        success: true,
        degrees,
      });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.getCompetitiveExams = async (req, res, next) => {
  try {
    let competitiveExams = await competitiveExam.find({})

    return res.status(200).json({
      success: true,
      competitiveExams,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.getSubjectsBasedOnStandard = async (req, res, next) => {
  const { StandardId } = req.query;
  try {
    let competitiveExams = await Standard.findById(StandardId)

    return res.status(200).json({
      success: true,
      competitiveExams,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
exports.UserRegister = async (req, res, next) => {
  const {
    instituteType,
    instituteTypeId,
    UserName,
    educationBoard,
    medium,
    classId,
    standards,
    specificSubjects,
    specificSubjectId,
    degreeType,
    degreeTypeId,
    competitiveExams,
    competitiveExamsId
  } = req.body
  try {
    let user = await User.create({
      instituteType,
      instituteTypeId,
      UserName,
      educationBoard,
      medium,
      classId,
      standards,
      specificSubjects,
      specificSubjectId,
      degreeType,
      degreeTypeId,
      competitiveExams,
      competitiveExamsId
    })
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" })
    return res.status(200).json({
      success: true,
      token: token,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};


