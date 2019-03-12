import axios from 'axios';
import firebase from 'firebase';

import {
  FETCH_EVENTS,
  FETCH_TEACHERS,
  FETCH_PTA,
  FETCH_SCHOOL
} from './types';

export const fetchEvents = () => async (dispatch) => {
  const DB = firebase.database();
  try {
    let result = await DB.ref().child('events').once('value');
    let events = {};
    result.val().map(event => {
      events = { ...events, ...event}
    })
    return dispatch({ type: FETCH_EVENTS, payload: events });
  } catch(error) {
    console.log(error);
  }
};

export const fetchPTA = () => async (dispatch) => {
  const DB = firebase.database();
  try {
    let result = await DB.ref().child('pta').once('value');
    let payload = [];
    result.val().map(member => {
      let mem = {};
      mem.title = member.title;
      mem.name = member.name;
      mem.email = member.email;
      mem.committees = member.committees;
      mem.imageURL = member.imageURL
      payload.push(mem)
    });
    return dispatch({ type: FETCH_PTA, payload });
  } catch(error) {
    console.log(error);
  }
};

export const fetchTeachers = () => async (dispatch) => {
  const DB = firebase.database();
  try {
    let result = await DB.ref().child('teacher').once('value');
    let payload = [];
    result.val().map(teacher => {
      let t = {};
      t.grade = teacher.grade;
      t.firstName = teacher["first name"];
      t.email = teacher.email;
      t.lastName = teacher["last name"];
      payload.push(t)
    });
    return dispatch({ type: FETCH_TEACHERS, payload });
  } catch(error) {
    console.log(error);
  }
};

export const fetchSchool = () => async (dispatch) => {
  const DB = firebase.database();
  try {
    let result = await DB.ref().child('school').once('value');
    const payload = result.val()[0]
    return dispatch({ type: FETCH_SCHOOL, payload });
  } catch(error) {
    console.log(error);
  }
};
