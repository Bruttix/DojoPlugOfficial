import User from "../models/user";
import Course from "../models/course";
import queryString from "query-string";
const stripe = require("stripe")(process.env.STRIPE_SECRET);
import express from "express";

const router = express.Router();

export const makeInstructor = async (req, res) => {
  try {
    // 1. find user from db
    const user = await User.findById(req.user._id).exec();
    // 2. if user dont have stripe_account_id yet, then create new
    if (!user.stripe_account_id) {
      const account = await stripe.accounts.create({ type: "express" });
      // console.log('ACCOUNT => ', account.id)
      user.stripe_account_id = account.id;
      user.save();
    }
    // 3. create account link based on account id (for frontend to complete onboarding)
    let accountLink = await stripe.accountLinks.create({
      account: user.stripe_account_id,
      refresh_url: process.env.STRIPE_REDIRECT_URL,
      return_url: process.env.STRIPE_REDIRECT_URL,
      type: "account_onboarding",
    });
    //  console.log(accountLink)
    // 4. pre-fill any info such as email (optional), then send url resposne to frontend
    accountLink = Object.assign(accountLink, {
      "stripe_user[email]": user.email,
    });
    // 5. then send the account link as response to fronend
    res.send(`${accountLink.url}?${queryString.stringify(accountLink)}`);
  } catch (err) {
    console.log("MAKE INSTRUCTOR ERR ", err);
  }
};

/**/
/*begin bronze tier charging*/
export const stripeTierSuccess = async (req, res) => {
  try {
    // get user from db to get stripe session id
    const user = await User.findById(req.user._id).exec();
    // if no stripe session return
    if (!user.stripeSession.id) return res.sendStatus(400);
    // retrieve stripe session
    const session = await stripe.checkout.sessions.retrieve(
      user.stripeSession.id
    );
    console.log("BRONZE SUCCESS", session);
    // if session payment status is paid, push course to user's course []
      if (session.payment_status === "paid") {
          makeBronze();
      }else {
          console.log('stripe tier success failed');
      }
    res.json({ success: true });
  } catch (err) {
    console.log("STRIPE SUCCESS ERR", err);
    res.json({ success: false });
  }
};
export const paidBronze = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // 2. if user dont have stripe_account_id yet, then create new
      // if no stripe session return
      if (!user.stripe_account_id) {
          const account = await stripe.accounts.create({ type: "express" });
          // console.log('ACCOUNT => ', account.id)
          user.stripe_account_id = account.id;
          user.save();
      }
    // create stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // purchase details
      line_items: [{
            
            price_data: {
                currency: 'usd',
                unit_amount: 500,
                product_data: {
                    name: 'Bronze',
                },
            }, quantity: 1,
      }], mode: 'payment',
      
      // redirect url after successful payment
      success_url: `${process.env.STRIPE_REDIRECT_BRONZE_URL}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    console.log("SESSION ID => ", session);

    await User.findByIdAndUpdate(req.user._id, {
      stripeSession: session,
    }).exec();
    res.send(session.id);
  } catch (err) {
    console.log("BRONZE ENROLLMENT ERR", err);
    return res.status(400).send("Bronze subscription failed");
  }
};
/*end charging bronze*/

// paid silver
export const paidSilver = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // 2. if user dont have stripe_account_id yet, then create new
      // if no stripe session return
      if (!user.stripe_account_id) {
          const account = await stripe.accounts.create({ type: "express" });
          // console.log('ACCOUNT => ', account.id)
          user.stripe_account_id = account.id;
          user.save();
      }
    // create stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // purchase details
      line_items: [{
            
            price_data: {
                currency: 'usd',
                unit_amount: 1000,
                product_data: {
                    name: 'Silver',
                },
            }, quantity: 1,
      }], mode: 'payment',
      
      // redirect url after successful payment
      success_url: `${process.env.STRIPE_REDIRECT_SILVER_URL}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    console.log("SESSION ID => ", session);

    await User.findByIdAndUpdate(req.user._id, {
      stripeSession: session,
    }).exec();
    res.send(session.id);
  } catch (err) {
    console.log("SILVERR ENROLLMENT ERR", err);
    return res.status(400).send("Silverr subscription failed");
  }
};
/*end charging silver*/
// paid gold
export const paidGold = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // 2. if user dont have stripe_account_id yet, then create new
      // if no stripe session return
      if (!user.stripe_account_id) {
          const account = await stripe.accounts.create({ type: "express" });
          // console.log('ACCOUNT => ', account.id)
          user.stripe_account_id = account.id;
          user.save();
      }
    // create stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // purchase details
      line_items: [{
            
            price_data: {
                currency: 'usd',
                unit_amount: 2000,
                product_data: {
                    name: 'Gold',
                },
            }, quantity: 1,
      }], mode: 'payment',
      
      // redirect url after successful payment
      success_url: `${process.env.STRIPE_REDIRECT_GOLD_URL}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    console.log("SESSION ID => ", session);

    await User.findByIdAndUpdate(req.user._id, {
      stripeSession: session,
    }).exec();
    res.send(session.id);
  } catch (err) {
    console.log("Gold ENROLLMENT ERR", err);
    return res.status(400).send("Gold subscription failed");
  }
};
/*end charging gold*/

// paid platinum
export const paidPlatinum = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // 2. if user dont have stripe_account_id yet, then create new
      // if no stripe session return
      if (!user.stripe_account_id) {
          const account = await stripe.accounts.create({ type: "express" });
          // console.log('ACCOUNT => ', account.id)
          user.stripe_account_id = account.id;
          user.save();
      }
    // create stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // purchase details
      line_items: [{
            
            price_data: {
                currency: 'usd',
                unit_amount: 3500,
                product_data: {
                    name: 'Platinum',
                },
            }, quantity: 1,
      }], mode: 'payment',
      
      // redirect url after successful payment
      success_url: `${process.env.STRIPE_REDIRECT_PLATINUM_URL}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    console.log("SESSION ID => ", session);

    await User.findByIdAndUpdate(req.user._id, {
      stripeSession: session,
    }).exec();
    res.send(session.id);
  } catch (err) {
    console.log("PLATINUM ENROLLMENT ERR", err);
    return res.status(400).send("Platinum subscription failed");
  }
};
/*end charging platinum*/
// paid diamond
export const paidDiamond = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // 2. if user dont have stripe_account_id yet, then create new
      // if no stripe session return
      if (!user.stripe_account_id) {
          const account = await stripe.accounts.create({ type: "express" });
          // console.log('ACCOUNT => ', account.id)
          user.stripe_account_id = account.id;
          user.save();
      }
    // create stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // purchase details
      line_items: [{
            
            price_data: {
                currency: 'usd',
                unit_amount: 5000,
                product_data: {
                    name: 'Diamond',
                },
            }, quantity: 1,
      }], mode: 'payment',
      
      // redirect url after successful payment
      success_url: `${process.env.STRIPE_REDIRECT_DIAMOND_URL}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    console.log("SESSION ID => ", session);

    await User.findByIdAndUpdate(req.user._id, {
      stripeSession: session,
    }).exec();
    res.send(session.id);
  } catch (err) {
    console.log("DIAMOND ENROLLMENT ERR", err);
    return res.status(400).send("Diamond subscription failed");
  }
};
/*end charging diamond*/
// paid stargem
export const paidStargem = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // 2. if user dont have stripe_account_id yet, then create new
      // if no stripe session return
      if (!user.stripe_account_id) {
          const account = await stripe.accounts.create({ type: "express" });
          // console.log('ACCOUNT => ', account.id)
          user.stripe_account_id = account.id;
          user.save();
      }
    // create stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // purchase details
      line_items: [{
            
            price_data: {
                currency: 'usd',
                unit_amount: 10000,
                product_data: {
                    name: 'Stargem',
                },
            }, quantity: 1,
      }], mode: 'payment',
      
      // redirect url after successful payment
      success_url: `${process.env.STRIPE_REDIRECT_STARGEM_URL}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    console.log("SESSION ID => ", session);

    await User.findByIdAndUpdate(req.user._id, {
      stripeSession: session,
    }).exec();
    res.send(session.id);
  } catch (err) {
    console.log("STARGEM ENROLLMENT ERR", err);
    return res.status(400).send("Stargem subscription failed");
  }
};
/*end charging silver*/
/**/
export const makeBronze = async (req, res) => {
  try {
    // 1. find user from db
    const user = await User.findById(req.user._id).exec();
    // 2. if user dont have stripe_account_id yet, then create new
    if (!user.stripe_account_id) {
      const account = await stripe.accounts.create({ type: "express" });
      // console.log('ACCOUNT => ', account.id)
      user.stripe_account_id = account.id;
      user.save();
    }
   const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // purchase details
      line_items: [{
            
            price_data: {
                currency: 'usd',
                unit_amount: 500,
                product_data: {
                    name: 'Bronze',
                },
            }, quantity: 1,
      }], mode: 'payment',
      
      // redirect url after successful payment
      success_url: `${process.env.STRIPE_REDIRECT_BRONZE_URL}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    console.log("SESSION ID => ", session);

    await User.findByIdAndUpdate(req.user._id, {
      stripeSession: session,
    }).exec();
    res.send(session.id);
  } catch (err) {
    console.log("BRONZE ENROLLMENT ERR", err);
    return res.status(400).send("Bronze subscription failed");
  }
};

export const getAccountStatus = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    const account = await stripe.accounts.retrieve(user.stripe_account_id);
    // console.log("ACCOUNT => ", account);
    if (!account.charges_enabled) {
      return res.staus(401).send("Unauthorized");
    } else {
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          stripe_seller: account,
          $addToSet: { role: "Instructor" },
        },
        { new: true }
      )
        .select("-password")
        .exec();
      res.json(statusUpdated);
    }
  } catch (err) {
    console.log(err);
  }
};
// bronze add tier
export const getAccountBronze = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // console.log("ACCOUNT => ", account);
    
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          $addToSet: { subscriptions: 'Bronze' },
        },
        { new: true }
      )
        .select("-password")
        .exec();
      res.json(statusUpdated);
   
  } catch (err) {
    console.log(err);
  }
};
//silver add tier
export const getAccountSilver = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // console.log("ACCOUNT => ", account);
    
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          $addToSet: { subscriptions: 'Silver' },
        },
        { new: true }
      )
        .select("-password")
        .exec();
      res.json(statusUpdated);
   
  } catch (err) {
    console.log(err);
  }
};
//gold add tier
export const getAccountGold = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // console.log("ACCOUNT => ", account);
    
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          $addToSet: { subscriptions: 'Gold' },
        },
        { new: true }
      )
        .select("-password")
        .exec();
      res.json(statusUpdated);
   
  } catch (err) {
    console.log(err);
  }
};
//platinum add tier
export const getAccountPlatinum = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // console.log("ACCOUNT => ", account);
    
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          $addToSet: { subscriptions: 'Platinum' },
        },
        { new: true }
      )
        .select("-password")
        .exec();
      res.json(statusUpdated);
   
  } catch (err) {
    console.log(err);
  }
};
//Diamond add tier
export const getAccountDiamond = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // console.log("ACCOUNT => ", account);
    
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          $addToSet: { subscriptions: 'Diamond' },
        },
        { new: true }
      )
        .select("-password")
        .exec();
      res.json(statusUpdated);
   
  } catch (err) {
    console.log(err);
  }
};
//Stargem add tier
export const getAccountStargem = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    // console.log("ACCOUNT => ", account);
    
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          $addToSet: { subscriptions: 'Stargem' },
        },
        { new: true }
      )
        .select("-password")
        .exec();
      res.json(statusUpdated);
   
  } catch (err) {
    console.log(err);
  }
};
// check instructor
export const currentInstructor = async (req, res) => {
  try {
    let user = await User.findById(req.user._id).select("-password").exec();
    // console.log("CURRENT INSTRUCTOR => ", user);
    if (!user.role.includes("Instructor")) {
      return res.sendStatus(403);
    } else {
      res.json({ ok: true });
    }
  } catch (err) {
    console.log(err);
  }
};
//check tiers
// check bronze
export const currentBronze = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).select("-password").exec();
        // console.log("CURRENT INSTRUCTOR => ", user);
        if (!user.subscriptions.includes("Bronze")) {
            return res.sendStatus(403);
        } else {
            res.json({ ok: true });
        }
    } catch (err) {
        console.log(err);
    }
};
// check silver
export const currentSilver = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).select("-password").exec();
        // console.log("CURRENT INSTRUCTOR => ", user);
        if (!user.subscriptions.includes("Silver")) {
            return res.sendStatus(403);
        } else {
            res.json({ ok: true });
        }
    } catch (err) {
        console.log(err);
    }
};
// check gold
export const currentGold = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).select("-password").exec();
        // console.log("CURRENT INSTRUCTOR => ", user);
        if (!user.subscriptions.includes("Gold")) {
            return res.sendStatus(403);
        } else {
            res.json({ ok: true });
        }
    } catch (err) {
        console.log(err);
    }
};
// check bronze
export const currentPlatinum = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).select("-password").exec();
        // console.log("CURRENT INSTRUCTOR => ", user);
        if (!user.subscriptions.includes("Platinum")) {
            return res.sendStatus(403);
        } else {
            res.json({ ok: true });
        }
    } catch (err) {
        console.log(err);
    }
};
// check bronze
export const currentDiamond = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).select("-password").exec();
        // console.log("CURRENT INSTRUCTOR => ", user);
        if (!user.subscriptions.includes("Diamond")) {
            return res.sendStatus(403);
        } else {
            res.json({ ok: true });
        }
    } catch (err) {
        console.log(err);
    }
};
// check bronze
export const currentStargem = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).select("-password").exec();
        // console.log("CURRENT INSTRUCTOR => ", user);
        if (!user.subscriptions.includes("Stargem")) {
            return res.sendStatus(403);
        } else {
            res.json({ ok: true });
        }
    } catch (err) {
        console.log(err);
    }
};

export const instructorCourses = async (req, res) => {
  try {
    const courses = await Course.find({ instructor: req.user._id })
      .sort({ createdAt: -1 })
      .exec();
    res.json(courses);
  } catch (err) {
    console.log(err);
  }
};

export const studentCount = async (req, res) => {
  try {
    const users = await User.find({ courses: req.body.courseId })
      .select("_id")
      .exec();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

export const instructorBalance = async (req, res) => {
  try {
    let user = await User.findById(req.user._id).exec();
    const balance = await stripe.balance.retrieve({
      stripeAccount: user.stripe_account_id,
    });
    res.json(balance);
  } catch (err) {
    console.log(err);
  }
};

export const instructorPayoutSettings = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    const loginLink = await stripe.accounts.createLoginLink(
      user.stripe_seller.id,
      { redirect_url: process.env.STRIPE_SETTINGS_REDIRECT }
    );
    res.json(loginLink.url);
  } catch (err) {
    console.log("stripe payout settings login link err => , err");
  }
};
