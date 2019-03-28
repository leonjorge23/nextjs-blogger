import Header from '../layout/Header';
import InnerWrapper from '../layout/InnerWrapper';

function BodyLayout() {
    return (
        <section className="body">
          <Header />
          <InnerWrapper />  
        </section>
    )
}

export default BodyLayout;