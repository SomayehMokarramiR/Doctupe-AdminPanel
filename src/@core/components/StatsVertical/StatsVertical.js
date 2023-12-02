// ** Third Party Components
import PropTypes from 'prop-types'

// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'
import {
  Eye,
  Cpu,
  Heart,
  Award,
  Truck,
  Server,
  Activity,
  ShoppingBag,
  AlertOctagon,
  MessageSquare
} from 'react-feather'


const StatsVertical = ({ icon, color, stats, statTitle, className }) => {
  return (
    <Card className='text-center'>
      <CardBody className={className}>
        <div className='avatar p-50 m-0 mb-1 bg-light-info'>
          <div className='avatar-content'>{<Eye size={21} />}</div>
        </div>
        <h2 className='fw-bolder'>{stats}%</h2>
        <p className='card-text line-ellipsis'>{statTitle}</p>
      </CardBody>
    </Card>
  )
}

export default StatsVertical

// ** PropTypes
StatsVertical.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  statTitle: PropTypes.string.isRequired
}
