-- Keep a log of any SQL queries you execute as you solve the mystery.

SELECT description FROM crime_scene_reports WHERE month = '7' AND day = '28' AND street = 'Chamberlin Street';

--Theft of the CS50 duck took place at 10:15am at the Chamberlin Street courthouse. Interviews were conducted today with three witnesses who were present at the time — each of their interview 
--transcripts mentions the courthouse.

sqlite> SELECT name, transcript FROM interviews WHERE month = '7' AND day = '28';  

--Jose|“Ah,” said he, “I forgot that I had not seen you for some weeks. It is a little souvenir from the King of Bohemia in return for my assistance in the case of the Irene Adler papers.”

--Eugene|“I suppose,” said Holmes, “that when Mr. Windibank came back from France he was very annoyed at your having gone to the ball.”

--Barbara|“You had my note?” he asked with a deep harsh voice and a strongly marked German accent. “I told you that I would call.” He looked from one to the other of us, as if uncertain which to address.

--Ruth|Sometime within ten minutes of the theft, I saw the thief get into a car in the courthouse parking lot and drive away. If you have security footage from the courthouse parking lot, you might want to look for cars that left the parking lot in that time frame.

--Eugene|I don't know the thief's name, but it was someone I recognized. Earlier this morning, before I arrived at the courthouse, I was walking by the ATM on Fifer Street and saw the thief there withdrawing some money.

--Raymond|As the thief was leaving the courthouse, they called someone who talked to them for less than a minute. In the call, I heard the thief say that they were planning to take the earliest flight out of Fiftyville tomorrow. The thief then asked the person on the other end of the phone to purchase the flight ticket.

SELECT name FROM people
JOIN courthouse_security_logs ON people.license_plate = courthouse_security_logs.license_plate
WHERE day = '28' AND month = '7' AND year = '2020' AND hour = '10' AND minute >= '15' 
AND minute < '25' AND activity = 'exit';

--Sometime within ten minutes of the theft:

--Patrick
--Ernest
--Amber
--Danielle
--Roger
--Elizabeth
--Russell
--Evelyn

SELECT name, amount FROM people

JOIN bank_accounts ON people.id = bank_accounts.person_id
JOIN atm_transactions ON bank_accounts.account_number = atm_transactions.account_number

WHERE day = '28' AND month = '7' AND transaction_type = 'withdraw' AND atm_location = 'Fifer Street';

--Earlier this morning, ATM on Fifer Street, thief there withdrawing some money:

--Ernest|50
--Russell|35
--Roy|80
--Bobby|20
--Elizabeth|20
--Danielle|48
--Madison|60
--Victoria|30

--SUSPECTS: Ernest, Russell, Elizabeth, Danielle

SELECT caller, receiver FROM phone_calls

WHERE month = '7' AND day = '28' AND duration < '60';

--As the thief was leaving the courthouse, they called someone who talked to them for less than a minute:

--(130) 555-0289|(996) 555-8899
--(499) 555-9472|(892) 555-8872
--(367) 555-5533|(375) 555-8161
--(499) 555-9472|(717) 555-1342
--(286) 555-6063|(676) 555-6554
--(770) 555-1861|(725) 555-3243
--(031) 555-6622|(910) 555-3251
--(826) 555-1652|(066) 555-9701
--(338) 555-6650|(704) 555-2131

SELECT name FROM people 

WHERE phone_number IN(
SELECT caller FROM phone_calls

WHERE month = '7' AND day = '28' AND duration < '60');

--CALLERS:
--Bobby
--Roger
--Victoria
--Madison
--Russell
--Evelyn
--Ernest
--Kimberly

--SUSPECTS: Ernest, Russell

-- First, i used MIN(flights.hour) in the search bellow, so i can search for the earliest flight

SELECT name,flights.hour FROM people 

JOIN passengers ON people.passport_number = passengers.passport_number

JOIN flights ON passengers.flight_id = flights.id

WHERE flights.origin_airport_id = '8' AND year = '2020' AND month = '7' AND day = '29' AND hour = '8';

--they were planning to take the earliest flight out of Fiftyville tomorrow. 

--Earlest flights on day 29:
--Doris|8
--Roger|8
--Ernest|8
--Edward|8
--Evelyn|8
--Madison|8
--Bobby|8
--Danielle|8

--ANSWER: Ernest

SELECT destination_airport_id FROM people 

JOIN passengers ON people.passport_number = passengers.passport_number

JOIN flights ON passengers.flight_id = flights.id

WHERE flights.origin_airport_id = '8' AND year = '2020' AND month = '7' AND day = '29' AND hour = '8';

--4

SELECT city FROM airports WHERE id = '4';

--London

SELECT name FROM people
JOIN phone_calls ON people.phone_number = phone_calls.receiver
WHERE day = '28' AND month = '7' AND year = '2020' AND duration < '60' AND caller = (SELECT phone_number FROM people WHERE name = 'Ernest');

--Berthold