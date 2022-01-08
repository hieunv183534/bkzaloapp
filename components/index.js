import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
const signalR = require("@microsoft/signalr");

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            message: '',
            listChat: ''
        }
    }


    componentDidMount() {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjA5NzE4ODMwMjUiLCJuYmYiOjE2NDE1NzMwNzgsImV4cCI6MTY0NDE2NTA3OCwiaWF0IjoxNjQxNTczMDc4fQ.ztFkaTPlOna_XhW7acFIRTdTOLwuGzkbRDMu6YVp6Wg";
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("http://hieunv183534-001-site1.gtempurl.com/chat",
                { accessTokenFactory: () => token ,
                transport: signalR.HttpTransportType.LongPolling})
            .configureLogging(signalR.LogLevel.Information)
            .build();

        connection.on("onmessage", (user, message) => {
            console.log(`${user} say ${JSON.stringify(message)}`);
        });

        connection.start().then(() => {
            console.log("okok");
            connection.invoke("JoinChat", "b8e30df1-6fd3-11ec-ac96-00155e015604");
            setTimeout(()=>{
                var mes ={conversationId: "b8e30df1-6fd3-11ec-ac96-00155e015604", content:"Test nhé okok!",receiverId:"0b3f2323-6dd3-11ec-ac96-00155e015604"};
                connection.invoke('Send',mes);
            },10000)
        });
    }


    render() {
        return (<View></View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,

    },
    input: {
        height: 40,
        width: 300,
        backgroundColor: '#e0e0e0',
        marginTop: 20,
        padding: 10
    }
});