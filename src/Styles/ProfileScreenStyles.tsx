import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    profileCard: {
        width: 320,
        backgroundColor: "#333",
        color: "white",
        borderRadius: 16,
        padding: 16,
        textAlign: "center",
        position: "relative",
    },
    backButton: {
        position: "absolute",
        left: 16,
        top: 16,
        backgroundColor: "transparent",
        borderWidth: 0,
    },
    icon: {
        color: "white",
    },
    title: {
        color: "#bbb",
        fontSize: 14,
        marginBottom: 16,
    },
    profileInfo: {
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "white",
    },
    infoCard: {
        width: "100%",
        backgroundColor: "#444",
        borderRadius: 8,
        padding: 12,
        marginTop: 12,
    },
    name: {
        fontWeight: "bold",
    },
    email: {
        color: "#bbb",
        fontSize: 12,
    },
    editLink: {
        color: "#4da6ff",
        fontSize: 12,
        textDecorationLine: "none",
        textAlign: "right",
    },
    menu: {
        marginTop: 16,
    },
    menuButton: {
        width: "100%",
        backgroundColor: "#444",
        color: "white",
        padding: 12,
        marginBottom: 8,
        textAlign: "left",
        borderRadius: 8,
    },
    signoutContainer: {
        marginTop: 16,
    },
    signoutButton: {
        backgroundColor: "transparent",
        borderWidth: 0,
        color: "red",
    },
});

export default styles;
