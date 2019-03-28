import FootScripts from '../components/layout/FooterScripts';
import HeadScripts from '../components/layout/HeadScripts';
import BodyLayout from '../components/layout/BodyLayout'


function Index(){
    return (
        <React.Fragment>
            <HeadScripts />
            <BodyLayout />
            <FootScripts/>	
        </React.Fragment>
    )
}


export default Index;
