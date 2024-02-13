SELECT DISTINCT(title) FROM movies

JOIN stars ON movies.id = stars.movie_id
JOIN people ON stars.person_id = people.id

--ver se tem o nome de um dos dois junto ao filme
WHERE name = 'Johnny Depp' 
OR name = 'Helena Bonham Carter'

--agrupá-los com um título
GROUP BY title

--quando tiver mais do que um deles(os dois)
HAVING COUNT(title) > 1;