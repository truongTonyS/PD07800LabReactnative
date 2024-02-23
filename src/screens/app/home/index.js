import { SafeAreaView, ScrollView } from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/Header';

const Home = () =>{
    const[keyword, setKeyword] = useState(false);
    return(
        <SafeAreaView>
            <AuthHeader
            onSearch={setKeyword}
            keyword={keyword}
            title="Find All You Need" />
            <ScrollView>
                <Text>Home</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default React.memo(Home);
