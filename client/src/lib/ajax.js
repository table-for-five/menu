import $ from 'jquery';

export default {
    renderMenu: (meal, callback) => {
        let tempURL = "http://127.0.0.1/3030/getMenu" + "?" + meal.toString();
        $.ajax({
            method: "GET",
            url: tempURL,
            success: (data) => callback(null, data),
            error: (err) => callback(err)
        });
    },




}