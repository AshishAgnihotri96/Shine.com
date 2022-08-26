const data = [
    {
    imgSrc :"https://static1.shine.com/l/m/product_image/images_all/1640935815_1767.png",
    heading:"Application Highlighter",
    para:"All of your job applications would be highlighted so as to catch the attention of the recruiter among 1000s of job applicants.",
    price:"Rs. 1699"
    }
,
    {
    imgSrc :"https://static1.shine.com/l/m/product_image/images_all/1640925161_7427.png",
    heading:"Featured Profile",
    para:"Get your profile highlighted for 90 days in recruiter’s search and be among the first ones to be seen by recruiters. Also you will get upto 10 times more recruiter views which in turn increases your chance to get contacted by respective recruiters.",
    price:"Rs. 1999"
    },
    {
        imgSrc :"https://static1.shine.com/l/m/product_image/images_all/1640940094_8952.png",
        heading:"Application Booster Package",
        para:"Making a recruiter view your profile is the toughest and most difficult work for any individual since the recruiter is able to view a maximum of 50 resumes in a day whereas the number of applicants is in the thousands. ",
        price:"Rs. 1699"
        }
    
]


const careerData = [
    {
        head :"Resume Format",
        content:"A job seeker’s professional background and skills for ",
        num:42522
    },
    {
        head :"Resignation Letter Format and Samples",
        content:"Saying goodbye to your teammates and manager is never an easy task. ",
        num:75275
    },
    {
        head :"Cover Letter Format",
        content:"A cover letter is a piece of evidence  on your experience and skills.",
        num:52561
    },
    
    
]


const careerDatas = [
    {
        head :"Resume Template",
        content:"Resumes which don’t appeal are trashed.",
        num:54621
    },
    {
        head :"Linkedin Summary Examples",
        content:"LinkedIn is a professional networking platform , Hunting ground job",
        num:45461
    },
    {
        head :"Relieving Letter ",
        content:"A relieving letter format is a formal document ",
        num:52461
    }
]

const successData = [
    {
        srcOne :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAC4APQMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAADAAIEAQf/xAAhEAADAAICAgIDAAAAAAAAAAAAAQIDESExElFBYXGBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD3EpdqePkmS/Fcdg8t+2BZW/JNv9DlIxqe+WXAhG9dkAyX5PS6A7eV9T/SY70mq2ciPJ/QySlaQAW902TG1NbZUgGlNNcHTPFeL2aAKZXqfyALn+AgGx1KlLfIhlFx3paYB0tNo4PcKvphOWnoCppXCSKRj1yxADzLc79AmoK8fyugCOpN9HZh16GmVK0gP//Z",
        srcTwo:"https://static1.shine.com/l/m/images/testimonial/WhatsApp_Image_2022-03-24_at_11.23.50.jpeg",
         paragraph:"Career is a very important thing in one's life. Whatever career path you choose to follow, it will impact your life greatly. Your career will define your status in a society in addition to your lifestyle.",
         name:"Ritu Singh",
         designation:"Developer" 
    },
    {
        srcOne :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAC4APQMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAADAAIEAQf/xAAhEAADAAICAgIDAAAAAAAAAAAAAQIDESExElFBYXGBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD3EpdqePkmS/Fcdg8t+2BZW/JNv9DlIxqe+WXAhG9dkAyX5PS6A7eV9T/SY70mq2ciPJ/QySlaQAW902TG1NbZUgGlNNcHTPFeL2aAKZXqfyALn+AgGx1KlLfIhlFx3paYB0tNo4PcKvphOWnoCppXCSKRj1yxADzLc79AmoK8fyugCOpN9HZh16GmVK0gP//Z",
        srcTwo:"https://static1.shine.com/l/m/images/testimonial/MicrosoftTeams-image.png",
         paragraph:"Career is a very important thing in one's life. Whatever career path you choose to follow, it will impact your life greatly. Your career will define your status in a society in addition to your lifestyle.",
         name:"Aditya Kaushik",
         designation:"Product Manager"
    },
    {
        srcOne :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAC4APQMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAADAAIEAQf/xAAhEAADAAICAgIDAAAAAAAAAAAAAQIDESExElFBYXGBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD3EpdqePkmS/Fcdg8t+2BZW/JNv9DlIxqe+WXAhG9dkAyX5PS6A7eV9T/SY70mq2ciPJ/QySlaQAW902TG1NbZUgGlNNcHTPFeL2aAKZXqfyALn+AgGx1KlLfIhlFx3paYB0tNo4PcKvphOWnoCppXCSKRj1yxADzLc79AmoK8fyugCOpN9HZh16GmVK0gP//Z",
        srcTwo:"https://static1.shine.com/l/m/images/testimonial/WhatsApp_Image_2022-03-24_at_11.24.55.jpeg",
         paragraph:"Career is a very important thing in one's life. Whatever career path you choose to follow, it will impact your life greatly. Your career will define your status in a society in addition to your lifestyle.",
         name:"Sanchit Talwar",
         designation:"Product Marketing Manager"
    }
]
export  {data, careerData, careerDatas, successData};