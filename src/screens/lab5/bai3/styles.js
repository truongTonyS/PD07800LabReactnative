import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 7,
    position: 'relative',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  body: {
    flex: 4,
    padding: 20,
  },
  footer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: 'blue',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  bookButton: {
    backgroundColor: 'blue',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bookButtonText: {
    backgroundColor: 'white',
    height:35,
    width:100,
    borderRadius:5,
    textAlign:'center',
    padding:5,
    marginRight: 20,
  },
  de:{
    fontSize:30,
    fontWeight:'bold',
    color:'blue',

  },
  de2:{
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:20,
    paddingTop:20,

    
  },
  imageContainer: {
    position: 'relative',
  },
  authHeaderContainer: {
    position: 'absolute',
    padding:20,
  },
  Textcontainer:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    color:'white',
    padding:15,
    
    
   

  }
});