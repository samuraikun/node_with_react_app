/*
Survey Form から SendGrid へメール送信し、SurveyモデルがMongoDBに格納されるが、
Sendgrid へのメール送信に失敗しており、その対応がまだなので、このスクリプトで、ダミーの Surveyオブジェクト を MongoDBに保存する
*/

const mongoose = require('mongoose');
const keys = require('../../config/keys');
const Survey = require('../../models/Survey');
const User = require('../../models/User');
const dummySurveys = require('../dummySurveys.json');

mongoose.connect(keys.mongoURL);

const save_survey = async (data) => {
  const user = await User.findOne({ googleId: '115396250142122631475' });
  
  const survey = new Survey({
    title: data.title,
    subject: data.subject,
    body: data.body,
    recipients: data.recipients,
    _user: user['_id'],
    dateSent: Date.now()
  });

  try {
    await survey.save();

    console.log(survey);
    console.log('save done!');
  } catch(err) {
    console.log(err);
  }
}

dummySurveys.forEach(survey => {
  save_survey(survey);
});