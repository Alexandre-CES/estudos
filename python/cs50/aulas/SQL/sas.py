import os
import csv
import sqlite3

#para o vscode achar os diretórios
script_directory = os.path.dirname(os.path.abspath(__file__))
csv_file_path = os.path.join(script_directory, "FormResponses.csv")
db_file_path = os.path.join(script_directory, "shows.db")

#diretório do arquivo .db e conectores para usar o sqlite3
open(db_file_path, "w").close()
connector = sqlite3.connect(db_file_path)
db = connector.cursor()

#criação das tabelas shows e genres
db.execute("CREATE TABLE shows (id INTEGER, title TEXT, PRIMARY KEY(id))") 
db.execute("CREATE TABLE genres (show_id INTEGER, genre TEXT, FOREIGN KEY(show_id) REFERENCES shows(id))")

#leitura do arquivo csv para tranferir dados ao arquivo .db
with open(csv_file_path, "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        title = row["title"].strip().upper()

        db.execute("INSERT INTO shows (title) VALUES(?)", (title,))
        id = db.lastrowid

        for genre in row["genres"].split(", "):
            db.execute("INSERT INTO genres (show_id, genre) VALUES(?, ?)", (id, genre))

    #IMPORTANTE para que os dados sejam atualizados        
    connector.commit()
