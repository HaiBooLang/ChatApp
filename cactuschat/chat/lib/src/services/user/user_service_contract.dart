import 'package:chat/src/models/user.dart';

/// An interface (be easy to switch all parts) for a user service that provides methods for connecting, disconnecting, and retrieving online users.
abstract class IUserService {
  
  /// Connects the given [user] to the service and returns the updated user object.
  Future<User> connect(User user);
  
  /// Retrieves a list of all online users.
  Future<List<User>> online();
  
  /// Disconnects the given [user] from the service.
  Future<void> disconnect(User user);
}
// Future is an object that represents the result of an asynchronous operation.
// It represents a potentially uncompleted asynchronous operation and can return a result or an error once the operation is completed.

