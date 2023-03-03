/*
 * @Author: itab.link
 * @Date: 2022-11-22 13:41:22
 * @LastEditors: itab.link
 * @LastEditTime: 2022-11-27 12:41:34
 * @Description: file content
 */

chrome.runtime.onInstalled.addListener((detail) => {
	if (detail.reason == chrome.runtime.OnInstalledReason.INSTALL) {
		if (navigator.userAgent.includes("Firefox")) {
			chrome.tabs.create({
				url: "dist/index.html",
			});
		} else {
			chrome.tabs.create({
				url: "chrome://newtab",
			});
		}

	}
});

let userInfo = localStorage.getItem('baseConfig')
console.log(userInfo)
console.log(11111)
window.addEventListener("storage", (ev) => {
	console.log(ev);
});
// let a = 1
// setInterval(() => {

// 	a = a + 1
// 	console.log('后台', a)
// 	alert('后台')
// 	var notification = new Notification(`Background通知${a}`, {
// 		icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
// 		body: 'Hey there! You\'ve been notified!',
// 	});
// 	notification.onclick = function () {
// 		window.open('http://stackoverflow.com/a/13328397/1269037');
// 	};
// }, 1000)


// if (Notification.permission !== 'granted')
// 	Notification.requestPermission();
// else {
// 	var notification = new Notification('background', {
// 		icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
// 		body: 'Hey there! You\'ve been notified!',
// 	});
// 	notification.onclick = function () {
// 		window.open('http://stackoverflow.com/a/13328397/1269037');
// 	};
// }

// chrome.notifications.create(null, {
// 	type: 'basic',
// 	iconUrl: 'img/icon.png',
// 	title: '这是标题',
// 	message: '您刚才点击了自定义右键菜单！',
// });


