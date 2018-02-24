import {StyleSheet} from 'react-native';

var Style=StyleSheet.create( {
	mainContainer: {
        flex: 1
	},

	display1: {
        flex: 1.5,
        backgroundColor: '#e0fff0',
        justifyContent: 'center'
	},

	display2: {
        flex: 2,
        backgroundColor: '#ffffff'
	},

	input: {
        flex: 7,
        backgroundColor: '#e0fff0'
	},

	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: 'black'
	},

	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black'
	},

	inputRow: {
        flex: 1,
        flexDirection: 'row'
    },

    txt: {
        color: 'black',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    txt1: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    change: {
        backgroundColor: '#ffffff'
    }


} );

export default Style;