class user
{
 static count=0;
 constructor(username , email , password)
 {
  this.username = username;
  this.email = email;
  this.password = password;
  user.count++
 }

 register()
 {
  console.log(this.username+' is register');
 }

 countuser()
 {
  console.log(user.count+' number of user are register');
 }
}

let user1 = new user('user1' , 'user1@email.com' , '12345');
let user2 = new user('user2' , 'user2@email.com' , '22345');
let user3 = new user('user3' , 'user3@email.com' , '32345');

//user1.register();
//user1.countuser();

class Member extends user
{
 constructor(username , email , password , memberpackage)
 {
  super(username , email , password)
  this.package = memberpackage;
  let todaysdate = new Date();
  const membershipactivetillyear = todaysdate.getfullYear();
  const membershipactivetillmonth = todaysdate.getMonth();
  const membershipactivetillday = todaysdate.getDay();

  this.membershipactivetilldate = new Date(
   membershipactivetillyear,
   membershipactivetillmonth,
   membershipactivetillday
  )
 }

 renewmembership()
 {
  const membershipactivetillyear = this.membershipactivetillyear.getfullYear();
  const membershipactivetillmonth = this.membershipactivetillmonth.getMonth();
  const membershipactivetillday = this.membershipactivetillday.getDay();

  if(this.package==="Standard Package")
  {
  this.membershipactivetilldate = new Date(
   membershipactivetillyear,
   membershipactivetillmonth+1,
   membershipactivetillday
   )
  }
  elseif(this.package==="Yearly Package")
  {
    this.membershipactivetilldate = new Date(
   membershipactivetillyear+1,
   membershipactivetillmonth,
   membershipactivetillday
   )
  }
 }

 subscriptionActiveTill()
 {
  console.log(this.username+'is subscribed to'+this.package+'up till'+this.membershipactivetilldate);
 }

 getPackage()
 {
  console.log(this.username+' is subscribed to '+this.package);
 }
}

const elon = new Member('elon','elon@gmail.com','pass.elon','Standard Package');
const jeff = new Member('jeff','jeff@gmail.com','pass.jeff','Yearly Package');

elon.getPackage();
elon.renewmembership();
elon.subscriptionActiveTill();

jeff.getPackage();
jeff.renewmembership();
jeff.subscriptionActiveTill();


