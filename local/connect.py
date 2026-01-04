import sqlite3
conn = sqlite3.connect("student.db")
print("\n📊 Students Data from Database:")
for row in rows:
    print(row)