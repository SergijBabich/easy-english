import React from 'react';
import {  connect} from 'react-redux';
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3012/',

});
export const profileAPI = {
    getUserInformation(name, status, position, surname, country, placeOfWork, level, id) {
        return instance.put(`profile/${id}`, {
            name,
            status,
            position,
            surname,
            country,
            placeOfWork,
            level
        }).then(response => {
            return response.data;
        })
    },
    setUserLevel(level, id) {
        return instance.put(`/level/${id}`, {
            level
        }).then(response => {
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
            return response.data;
        })
    },
    login(login, password) {
        return instance.get(`/getUser?login=${login}&password=${password}`, {
            login,
            password
        }).then(response => {
            return response.data;
        })
    },
    deleteUser(id) {
        return instance.delete(`/clients/${id}`).then(response => {
            return response.data;
        });

    }
}
export const usersAPI = {
    getUsers(page) {
        return instance.get(`/clients?pageCount=${10}&page=${page}`, {
            page
        }).then(response => {
            return response.data;
        })
    }
}
