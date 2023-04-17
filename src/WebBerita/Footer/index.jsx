import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

const Footer = () => {
    return ( 
        <div>
            <Card bg="primary" className="text-center text-light p-2">
                &copy; 2021 Jody, Inc. All rights reserved.
            </Card>
        </div>
     );
}
 
export default Footer;