# Expanding and Intializing a New Grade

### GraphQL skills insertion

1. Go to skills table and click insert row
2. Follow the naming and titling conventions of the other rows and click insert
3. Repeat this step for all the skills you would like to add for that specific grade

### Intialization of new skills

1. Go to skill.ts and find the Skill enum
2. Add desired skills as a new skill under the skills enum
3. Go to Grade enum and add your desired grade
4. Go to getSkillsForTopic function and add the skills for your grade under the apporiate topic
5. Refer to the skills table on Hausura
6. Go to getSkillId function and add your skills under the switch condition and the return value for the switch case should match the id of the skill on the Hasura skills table
7. Go to SkillDescription function and create a condtition for each of your added skills and give each a description which will be displayed on the Topic Overview page
8. Change to the practiceQuestionGenerator.ts file
9. Go to generatePracticeQuestions function and under the appropriate topic add the stringfied Skill as a switch condition and assign skill to the Skill enum that reperesnts that string

### Intialization of new badges

1. Refer to the badges table on Hausura
2. Click insert row and add a badge for each topic covered in the new grade (e.g Grade 1 has 4 badges: Grade 1 Addition, Grade 1 Subtraction, Grade 1 Multiplication, and Grade 1 Division)
3. Go to badgeHelper.ts file and find getBadgeId function
4. Under the appropriate topic add a case for whatever grade you are currently adding and return the id for the badge you added on the Hausura table

### Intialization of new skills and badges for each user

Now comes the part where you must intialize the badges and skills for all the users of the app. This is important to retrieve and save information emoji confidence levels for each skills and the badges unlocked from quizzes.

1. Go to graphiql
   Note: we will have 2 mutations and 1 query. The query is to recieve the user_ids of all the players. 1 mutation will be for the insertions of the user_skills. And the other mutation will be for the insertions for user_badges.
2. Copy and paste the code below into graphiql

---

mutation initUserSkills($userId: String = "") {
  insert_user_skills(
    objects: [
      { user_id: $userId, skill_id: 63, emoji: null }
      { user_id: $userId, skill_id: 64, emoji: null }
      { user_id: $userId, skill_id: 65, emoji: null }
      { user_id: $userId,  skill_id: 66, emoji: null }    
    ]
  ) {
    returning {
      skill_id
    }
  }
}
mutation initUserBadges($userId: String = "") {
insert_user_badges(
objects: [
{ userId: $userId, locked: true, badgeId: 51 }
{ userId: $userId, locked: true, badgeId: 52 }
{ userId: $userId, locked: true, badgeId: 53 }
{ userId: $userId, locked: true, badgeId: 54 }
]
) {
returning {
badgeId
}
}
}

query MyQuery {
users {
id
}
}

---

3. Under the objects for the insert_user_skills change the skill_id property to the skill_id numbers for the skills you are adding for your grade (refer to Hausara skills Table)
4. Similarily, change the badge_id properties to the badge_id you are adding for your grade (refer to Hausara badge Table)
5. In the query variables have something like: {"userId": "104490054937706378736"}
6. Now cut the query variables and click the play button and click My_Query
7. Paste the query variable you cut earlier and replace the big number with the first id you see
8. Now click play again and click insert_user_skills
9. Now click play again and click insert_user_badges
10. Now cut the query variable again and click run and My_Query
11. Paste the Query varibale and replace the id with the next id recieved from the query
12. Repeat this process (steps 7 - 11) until you intialize all the users

### New User Intialization

1. Go to [...nextauth].js
2. Find the insert_user_skills and insert_user_badges mutations and under objects add in the rows required for your grade skills with the appropriate skillIds and badgeIds

### Bonus Insights

1. Under the practice/[slug].tsx file go to export async function getStaticPaths() and add the apporiate fields. This is very important as it allows the user to retry the quiz after they complete it. If these fields are not added then the quiz page will crash out

To see the general process of adding a grade refer to: https://github.com/vithushan19/math/pull/332
