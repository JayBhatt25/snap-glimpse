'use client'
import TimeAgo from 'react-timeago'

type Props = {
    time: string;
}
function LiveTimeStamp({time}: Props) {
  return (
    <TimeAgo date={time}>LiveTimeStamp</TimeAgo>
  )
}

export default LiveTimeStamp