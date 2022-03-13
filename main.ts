input.onButtonPressed(Button.A, function () {
    MQTT.em_mqtt_publish_basic("test01", "Hello from mb")
})
let receivedText = ""
MQTT.em_wifi_connect(
SerialPin.P1,
SerialPin.P2,
"CU_bkCf",
"p6r6hayk"
)
MQTT.em_mqtt_connect(
"94.191.117.173",
12583,
"cleverpig-mb",
"cleverpig",
"mTD7aE3SAF"
)
MQTT.em_mqtt_subscribe("test01", 0)
basic.forever(function () {
    receivedText = MQTT.em_mqtt_get_topic_message("test01")
    if (receivedText != "") {
        basic.showString(receivedText)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
