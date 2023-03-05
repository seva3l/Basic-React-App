const { StyleSheet } = require("react-native");
import Color from '../../util/ColorConstant'

const styles = StyleSheet.create({
    titleContainer:{
        marginHorizontal:10,
        height:70,
        backgroundColor: Color.WHITE,
        justifyContent:"center",
        padding:10,
        marginBottom:2
    },
    title:{
        fontSize:18,
        fontWeight:'600',
        color: Color.PRIMARY_TEXT,
    },
    viewCategoriesContainer:{
        flexDirection:'row',
        marginHorizontal:10,
        height:60,padding:10,
        backgroundColor:"white",
        marginTop:2,
        marginBottom:5,
        justifyContent:"center",
        alignItems:"center",
    },
    button:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
   
})

export default styles;