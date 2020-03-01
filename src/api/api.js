import React from 'react';
import {  connect} from 'react-redux';
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://gentle-beyond-33844.herokuapp.com//',

});
export const profileAPI = {
    getUserInformation(name, status, position, surname, country, placeOfWork, level, id) {
        console.log(placeOfWork)
        return instance.put(`profile/${id}`, {
            name,
            status,
            position,
            surname,
            country,
            placeOfWork,
            level
        }).then(response => {
            console.log(response.data);
            return response.data;
        })
    },
    setUserLevel(level, id) {
        return instance.put(`/level/${id}`, {
            level
        }).then(response => {
            console.log(response.data);
            return response.data;
        })
    },
    /* DOPILIT!!*/
    setUserPhoto(avatar, id) {
        let formData = new FormData();
        formData.append('file', avatar);
        return instance.post(`/linkAvatar/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            console.log(response.data);
            return response.data;
        })
    }
}
export const authAPI = {
    register(login, password) {
        return instance.post('/clients', {
            login,
            password
        }).then(response => {
            console.log(response.data);
            return response.data;
        })
    },
    login(login, password) {
        return instance.get(`/getUser?login=${login}&password=${password}`, {
            login,
            password
        }).then(response => {
            console.log(response.data);
            return response.data;
        })
    },
    logOut(id) {
        console.log(id);
        return instance.delete(`/clients/${id}`).then(response => {
            console.log(response.data);

            return response.data;
        });

    }
}
export const usersAPI = {
    getUsers(page) {
                console.log(page);
        return instance.get(`/clients?pageCount=${10}&page=${page}`, {
            page
        }).then(response => {
            console.log(response.data);
            return response.data;
        })
    }
}
