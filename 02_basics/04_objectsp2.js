//\ Destructuring of Object

const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // one way to access

const {courseInstructor: Inst} = course // another way
//console.log(courseInstructor)
//console.log(Inst)

// We receive Api's as json file either in form of object or array of object


