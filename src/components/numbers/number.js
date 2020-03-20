import React from "react";

const NumberTemplate = (props) => (
    <div style={styles.root} >

        <div style={styles.txtContent}>{props.label}</div>
        <div style={styles.number}>
            {props.value}
        </div>
        
    </div>
);

const styles = {
    root: {
        display: 'flex',
        height: 300,
        width: 100,
        margin: 'auto'
    },
    txtContent: {
        marginTop: '145px',
        marginLeft: '20px',
        fontFamily: 'sans-serif',
    },
    number: {
        flex: 1,
        marginTop: '15%',
        marginLeft: '50px',
        fontFamily: 'sans-serif',
        fontSize: '180px'
    }
}

export default NumberTemplate;