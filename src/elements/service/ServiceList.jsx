import React ,{ Component }from "react";
import { FiLayers, FiMusic, FiPenTool, FiSettings } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'Create a presence on the web and reach a wider audience with a website that is tailored to your needs'
    },
    {
        icon: <FiMusic />,
        title: 'Live DJ Services',
        description: 'Unwind and have fun with a live DJ that will play your favorite songs and more.'
    },
    {
        icon: <FiPenTool />,
        title: 'Notary Public Services',
        description: 'Take a load off and let the experience of a notary public handle your legal documents.'
    },
    { 
        icon: <FiSettings />,
        title: 'Office/Entertainment Setup',
        description: 'See what you like, like what you see, and get it setup for you.'
    },
    // {
    //     icon: <FiUsers />,
    //     title: '',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // },
    // { 
    //     icon: <FiMonitor />,
    //     title: '',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
