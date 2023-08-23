/// A class representing a user in the chat application.
class User {
  String get id => _id;
  String username;
  String photoUrl;
  String _id; // return created by rethink when we create a new user
  bool active;
  DataTime lastseen;

  /// Creates a new instance of [User].
  ///
  /// [username], [photoUrl], [active], and [lastseen] are required parameters.
  User(
      {@required String username,
      @required String photoUrl,
      @required bool active,
      @required DateTime lastseen});

  /// Converts this [User] instance to a JSON object.
  toJson() => {
        'username': username,
        'photoUrl': photoUrl,
        'active': active,
        'lastseen': lastseen
      };

  /// Creates a new instance of [User] from a JSON object.
  factory User.fromJson(Map<String, dynamic> json) {
    final user = User(
        username: json['username'],
        photoUrl: json['photoUrl'],
        active: json['active'],
        lastseen: json['lastseen']);
    user._id = json['id'];
    return user;
  }
}
