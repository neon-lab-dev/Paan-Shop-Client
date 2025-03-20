import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

interface QRCodePDFProps {
    productName: string;
    sellerName: string;
    shopName: string;
    buyValue: number;
    getFreeValue: number;
    qrImageUrl: string;
}

const QRCodePDF: React.FC<QRCodePDFProps> = ({ productName, sellerName, shopName, buyValue, getFreeValue, qrImageUrl }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <Text style={styles.title}>Product: {productName}</Text>
                    <Text style={styles.description}>Buy {buyValue} {productName} & get {getFreeValue} free</Text>
                    <Image src={qrImageUrl} style={styles.qrCode} />
                    <Text style={styles.sellerName}>Seller Name : {sellerName}</Text>
                    <Text style={styles.shopName}>Shop Name : {shopName}</Text>
                </View>
            </Page>
        </Document>
    );
};

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    container: {
        textAlign: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    qrCode: {
        width: 400,
        height: 400,
        marginBottom: 10,
        marginTop: 10,
    },
    sellerName: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    shopName: {
        fontSize: 16,
        marginTop: 5,
    },
    description: {
        fontSize: 16,
        marginTop: 3,
    },
});

export default QRCodePDF;
