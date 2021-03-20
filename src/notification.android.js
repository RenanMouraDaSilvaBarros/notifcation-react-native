import PushNotification from "react-native-push-notification";

const notificationLocal = () => {



    PushNotification.localNotification({
        channelId: "channel-id", 
        title: "fedwfwe",
        message: "fefwr"

    })

}




const notificationBackground = () => {

    PushNotification.localNotificationSchedule({
        channelId: "channel-id", 
        title: "5 segundos",
        message: "5 segundos", // (required)
        date: new Date(Date.now() + 5 * 1000), // in 60 secs
        allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    });
    console.log("notifi remote finsh")

}


const notificationCancel = () => {

    PushNotification.localNotificationSchedule({
        title: "fdswf",
        message: "My Notification Message", // (required)
        date: new Date(Date.now() + 5 * 1000), // in 60 secs
    });

}
export { notificationLocal, notificationBackground, notificationCancel }




