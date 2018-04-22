<template>
    <v-content>
        <section>
            <v-parallax src="/images/background/back-jail-img.jpg" height="600">
                <v-layout
                        column
                        align-center
                        justify-center

                >
                    <!--<img src="assets/vuetify.png" alt="Vuetify.js" height="200">-->
                    <h1 class="mb-2 display-1 text-xs-center secondary--text">WE AT 4EVERCONNECTED</h1>
                    <h2 class="mb-2 headline text-xs-center">BELIEVE THAT EVERYONE NEEDS SOMEONE TO CONNECT WITH.</h2>
                    <v-btn
                            class="blue lighten-1 mt-5"
                            dark
                            large
                            href="/connect"
                    >
                        Get Started
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>

        <section >
            <v-layout
                    column
                    wrap
                    class="py-5 grey lighten-5 black--text"
                    align-center
            >
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">What We Do</h2>
                        <span class="subheading">
                            We are dedicated to keeping inmates connected with the outside world. <br/> You can activate services of your loved ones who are connected us. Also you can send photos to them.
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl >
                        <v-layout row wrap>
                            <v-flex xs12 md4 >
                                <v-card class="elevation-0 transparent black--text">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">message</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Unlimited Messaging <br/>($15/Month)</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Inmate can send and receive sms and email with his/her unique phone number and email address.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent black--text">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">photo_camera</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Photo Service <br/>($0.75/Photo)</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Inmate can receive photos with his/her phone.
                                        A minimum of 5 photos is required for .75 pricing. 4 photos or less b will be charged at a rate of .85 cents per photo. Account must have funds before photos are processed.
                                        You can also upload and pay for your photos HERE.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent black--text">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">phone_forwarded</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Calling <br/>($20/300 Block of minutes )</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Inmate can use 3 local numbers. Long distance numbers can be interchanged as often as he/she wish. Unused minutes roll over and only a nominal fee of $5 a month will apply if minutes are still available. Re-up on minutes when you are ready. Phone numbers must be paid monthly or they will be lost after 25 days of inactivity.

                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent black--text">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">fas fa-football-ball</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Sports Odds with Predictions/Picks<br/>($15/Month)</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Current available sports are nfl, ncaaf, nba, ncaab, mlb, nhl, wnba. Odds(4h, 12h, 18h-3 times in a day), Scores, Standing, Rating, Picks, Trends, Injuries, Offensive_stats, Defensive_stats, News(once a day).
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent black--text">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">fas fa-users</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Pen Pal Service <br/> ($30/6 Months ad)</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Unlimited words; unlimited photos; and change it up as much as inmate would like!!! Feel free to add inmate's artwork and poems as well. Inmate can also add music to his/her profile. If he/her has a business entity set up he can market his products on our website. We can assist with business entity set up. Inquire for more details.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent black--text">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">fas fa-trophy</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Wager Placement <br/> ($25/Month)</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Inmate can place unlimited wagers directly through us to include your choice of straight wager or parlay, moneyline or spread on NBA, NFL, NCAAF/B, and MLB. Other sports may be available upon request. Minimum deposit of $50 is required (withdrawal $50 minimum) and Moneygram fees will be debited from the total. A money order can be mailed as well, in addition to many person of your choice). Starting balance is separate from the monthly service fee.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section>
            <v-parallax src="/images/background/hand-women.jpg" height="380">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-3 text-xs-center">4EVER CONNECTING THE CHAINS THAT ARE BROKEN!</div>
                    <em>Please connect your loved one today!</em>
                    <v-btn
                            class="blue lighten-2 mt-5"
                            dark
                            large
                            href="/pre-made-themes"
                    >
                        Get Started
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-container grid-list-xl>
                <v-layout row wrap justify-center class="py-5">
                    <v-flex xs12 sm4>
                        <v-card class="elevation-0 transparent  text-xs-center">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Company info</div>
                            </v-card-title>
                            <v-card-text >
                                FOUNDED IN 2015, WE AT 4EVERCONNECTED BELIEVE THAT EVERYONE NEEDS SOMEONE TO CONNECT WITH.
                            </v-card-text>
                            <v-card-text>
                                Also believe the everyone make mistakes and should not be abandoned because of those mistakes. When those you love desert you, we are dedicated to getting inmates connected with life, Love And Laughter!
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm4 offset-sm1>
                        <v-card class="elevation-0 transparent  text-xs-center">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Contact us</div>
                            </v-card-title>
                            <v-card-text>
                                4EVER CONNECTING THE CHAINS THAT ARE BROKEN!
                            </v-card-text>
                            <v-list class="transparent">
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="blue--text text--lighten-2">phone</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title class="body-1">918-527-8290</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="blue--text text--lighten-2">place</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title class="body-1">P.O.BOX 471898 TULSA, OK 74147</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="blue--text text--lighten-2">email</v-icon>
                                    </v-list-tile-action>

                                    <v-list-tile-content>
                                        <v-list-tile-title class="body-1">4EVERCONNECTEDLLC@GMAIL.COM</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
    </v-content>
</template>