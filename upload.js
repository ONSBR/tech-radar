var gulp = require('gulp')
require('dotenv').config();
 
var AWS = {
  "accessKeyId":    process.env.AWS_ACCESS_KEY_ID,
  "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY
}

var s3 = require('gulp-s3-upload')(AWS);

gulp.task("upload", () => {  
  gulp.src("./dist/**")
      .pipe(s3({
          Bucket: '', //  Required
          ACL:    'public-read'       //  Needs to be user-defined
      }, {
          // S3 Constructor Options, ie:
          maxRetries: 5
      }))
  ;
});