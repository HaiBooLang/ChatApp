import 'package:rethinkdb_dart/rethinkdb_dart.dart';

/// set up our database for testing
/// Creates a new database named 'test' and a table named 'users' using the provided Rethinkdb instance and Connection.
/// 
/// Returns a Future that completes when the database and table have been created.
Future<void> createDb(Rethinkdb r, Connection connection) async {
  await r.dbCreate('test').run(connection).catchError((err) => {});
  await r.tableCreate('users').run(connection).catchError((err) => {});
}

/// Deletes all documents in the 'users' table using the provided Rethinkdb instance and Connection.
/// 
/// Returns a Future that completes when all documents have been deleted.
Future<void> cleanDb(Rethinkdb r, Connection connection) async {
  await r.table('users').delete().run(connection);
}
