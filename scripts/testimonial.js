$(document).ready(function () {
    randomtip();
    (function () {
        "use strict";

        var quotes = [
                    ["<img src='images/19.jpeg'/> <p> After residency, the federal rate was at 6.7%. I knew I had to do something to lower my rate. Through refinancing, I was able to pay off my credit card debt quickly, start saving for a house and am now more financially stable.</p> <b>Carlos Garcia (M.D., University of Southern California)</b> <div>Carlos</div>"],
                    ["<img src='images/17.png'/> <p> I had 11 loans, each with a different interest rate. By refinancing, I was able to lower my rate and have one monthly payment - instead of 11.</p> <b>Mariella Gozalo B.A. Business Management and Marketing, VCU</b> <div>Mariella</div>"],
                    ["<img src='images/18.png'/> <p> The refinance process with Purefy was practically effortless. As a busy, young professional trying to be smart with her money, I couldn&#39;t have asked for anything better.</p> <b>Lindsey Spencer (M.S. in Public Policy, George Mason University)</b> <div>Lindsey</div>"],
                    ["<img src='images/87.png'/> <p>The interest rate I got was a few points lower than the next best offer. It&#39;s a fantastic company with real people to help every step of the way.</p> <b>Arley Smude, School of International and Public Affairs M.P.A, Columbia University</b> <div>Arley</div>"],
                    ["<img src='images/20.jpeg'/> <p>I realized I was leaving so much money on the table. My loans were all at a weighted average of 7.5% and you guys were offering me 4.15% after the discounts. 4.15% versus 7.5%, that&#39;s a big deal.</p> <b>Nick Timmons (M.S. Technology Management, University of Illinois)</b> <div>Nick</div>"]



//        var quotes = [
//["<img src='../assets/images/19.jpeg'/>", "<p> After residency, the federal rate was at 6.7%. I knew I had to do something to lower my rate. Through refinancing, I was able to pay off my credit card debt quickly, start saving for a house and am now more financially stable.</p> <b>Carlos Garcia (M.D., University of Southern California)</b> <div>Carlos</div>"],

//        ["<img src='../assets/images/17.png'", "<p> I had 11 loans, each with a different interest rate. By refinancing, I was able to lower my rate and have one monthly payment - instead of 11.</p> <b>Mariella Gozalo B.A. Business Management and Marketing, VCU</b> <div>Mariella</div>"],

//        ["<img src='../assets/images/18.png'", "<p> The refinance process with Purefy was practically effortless. As a busy, young professional trying to be smart with her money, I couldn&#39;t have asked for anything better.</p> <b>Lindsey Spencer (M.S. in Public Policy, George Mason University)</b> <div>Lindsey</div>"],

//        ["<img src='../assets/images/87.png'", "<p>The interest rate I got was a few points lower than the next best offer. It&#39;s a fantastic company with real people to help every step of the way.</p> <b>Arley Smude, School of International and Public Affairs M.P.A, Columbia University</b> <div>Arley</div>"],

//        ["<img src='../assets/images/20.jpeg'", "<p>I realized I was leaving so much money on the table. My loans were all at a weighted average of 7.5% and you guys were offering me 4.15% after the discounts. 4.15% versus 7.5%, that&#39;s a big deal.</p> <b>Nick Timmons (M.S. Technology Management, University of Illinois)</b> <div>Nick</div>"]


        ].sort(function () {
            return 0.5 - Math.random();
        }),
          quotesHTML = "";

        for (var i = 0; i < quotes.length; i++) {
            quotesHTML += "<div class='borrower'>" + quotes[i][0] +   "</div>";
        }
        document.getElementById("quotes").innerHTML = quotesHTML;
    }());

    function randomtip() {
        var length = $(".quote2").length;
        var ran = Math.floor(Math.random() * length) + 1;
        $(".quote2:nth-child(" + ran + ")").show();
    };



});


