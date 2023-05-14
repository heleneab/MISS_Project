import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Privacy = () => {


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Privacy Policy</Text>
            <View style={styles.contentContainer}>
                <Text style={styles.subtitle}>Introduction</Text>
                <Text style={styles.paragraph}>
                    We at MISS take your privacy seriously. This policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "Application"). Please read this policy carefully before using the Application.
                </Text>
                <Text style={styles.subtitle}>Information Collection</Text>
                <Text style={styles.paragraph}>
                    We may collect certain information from you when you register for an account on the Application, such as your name, email address, and other contact information. We may also collect information about your use of the Application, such as your IP address, device type, and usage data.
                </Text>
                <Text style={styles.subtitle}>Use of Information</Text>
                <Text style={styles.paragraph}>
                    We may use the information we collect to provide and improve the Application, to personalize your experience, to communicate with you, and to respond to your inquiries and requests.
                </Text>
                <Text style={styles.subtitle}>Disclosure of Information</Text>
                <Text style={styles.paragraph}>
                    We may disclose your information to third parties who perform services on our behalf, such as hosting providers, payment processors, and customer service providers. We may also disclose your information if we are required to do so by law or if we believe that such action is necessary to comply with a legal obligation, protect our rights or property, or protect the safety of others.
                </Text>
                <Text style={styles.subtitle}>Security</Text>
                <Text style={styles.paragraph}>
                    We take reasonable measures to protect your information from unauthorized access, disclosure, or destruction. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security.
                </Text>
                <Text style={styles.subtitle}>Changes to this Policy</Text>
                <Text style={styles.paragraph}>
                    We may update this policy from time to time. If we make any material changes, we will notify you by email or by posting a notice in the Application prior to the change becoming effective. Your continued use of the Application after any such changes constitutes your acceptance of the new policy.
                </Text>
                <Text style={styles.subtitle}>Contact Us</Text>
                <Text style={styles.paragraph}>
                    If you have any questions or concerns about this policy, please contact us at support@missapp.com.
                </Text>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contentContainer: {
        paddingBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    agreeText: {
        fontSize: 16,
    },
});

export default Privacy;
