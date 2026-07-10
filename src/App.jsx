import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://unavatar.io/google.com",
      company: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://unavatar.io/microsoft.com",
      company: "Microsoft",
      datePosted: "5 days ago",
      post: "Backend Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://unavatar.io/amazon.com",
      company: "Amazon",
      datePosted: "1 week ago",
      post: "Cloud Support Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://unavatar.io/apple.com",
      company: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://unavatar.io/meta.com",
      company: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://unavatar.io/netflix.com",
      company: "Netflix",
      datePosted: "2 weeks ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Los Angeles, USA"
    },
    {
      brandLogo: "https://unavatar.io/nvidia.com",
      company: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://www.vectorlogo.zone/logos/adobe/adobe-icon.svg",
      company: "Adobe",
      datePosted: "4 days ago",
      post: "UI/UX Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$38/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://unavatar.io/intel.com",
      company: "Intel",
      datePosted: "3 weeks ago",
      post: "Embedded Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://unavatar.io/oracle.com",
      company: "Oracle",
      datePosted: "12 days ago",
      post: "Java Developer",
      tag1: "Hybrid",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className="parent"  key={index} >
       {jobOpenings.map(function(elem, index){
         return (
           <Card 
             company={elem.company} 
             brandLogo={elem.brandLogo} 
             datePosted={elem.datePosted} 
             post={elem.post} 
             tag1={elem.tag1} 
             tag2={elem.tag2} 
             pay={elem.pay} 
             location={elem.location}
           />
         )
       })}
    </div>
  )
}

export default App