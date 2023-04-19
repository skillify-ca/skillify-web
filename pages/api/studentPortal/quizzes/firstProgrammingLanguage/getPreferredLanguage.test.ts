import { LanguageQuizScore, getPreferredLanguageForQuizResults } from "./getPreferredLanguage";

test("Test getPreferredLanguageForQuizResults function - JavaScript with Highest Score", async () => {
    //arrange    
    const languageQuizScore:LanguageQuizScore = { 
        JavaScript: 15,
        'HTML/CSS': 10,
        Python: 10,
    }  
    const expectedPreferredLanguage = "JavaScript"
    
    // Act
    const actualScore = getPreferredLanguageForQuizResults(languageQuizScore);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedPreferredLanguage);
  });

  test("Test getPreferredLanguageForQuizResults function - Python with Highest Score", async () => {
    //arrange    
    const languageQuizScore:LanguageQuizScore = { 
        JavaScript: 5,
        'HTML/CSS': 5,
        Python: 10,
    }  
    const expectedPreferredLanguage = "Python"
    
    // Act
    const actualScore = getPreferredLanguageForQuizResults(languageQuizScore);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedPreferredLanguage);
  });

  test("Test getPreferredLanguageForQuizResults function - HTML/CSS with Highest Score", async () => {
    //arrange    
    const languageQuizScore:LanguageQuizScore = { 
        JavaScript: 5,
        'HTML/CSS': 10,
        Python: 5,
    }  
    const expectedPreferredLanguage = "HTML/CSS"
    
    // Act
    const actualScore = getPreferredLanguageForQuizResults(languageQuizScore);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedPreferredLanguage);
  });

  test("Test getPreferredLanguageForQuizResults function - Overall tie among all languages", async () => {
    //arrange    
    const languageQuizScore:LanguageQuizScore = { 
        JavaScript: 10,
        'HTML/CSS': 10,
        Python: 10,
    }  
    const expectedPreferredLanguage = "JavaScript"
    
    // Act
    const actualScore = getPreferredLanguageForQuizResults(languageQuizScore);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedPreferredLanguage);
  });

  test("Test getPreferredLanguageForQuizResults function - Tie between HTML/CSS and Python", async () => {
    //arrange    
    const languageQuizScore:LanguageQuizScore = { 
        JavaScript: 0,
        'HTML/CSS': 10,
        Python: 10,
    }  
    const expectedPreferredLanguage = "HTML/CSS"
    
    // Act
    const actualScore = getPreferredLanguageForQuizResults(languageQuizScore);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedPreferredLanguage);
  });

  test("Test getPreferredLanguageForQuizResults function - No quiz question options are selected", async () => {
    //arrange    
    const languageQuizScore:LanguageQuizScore = { 
        JavaScript: 0,
        'HTML/CSS': 0,
        Python: 0,
    }  
    const expectedPreferredLanguage = "JavaScript"
    
    // Act
    const actualScore = getPreferredLanguageForQuizResults(languageQuizScore);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedPreferredLanguage);
  });